function get_push_msg(data) {
    let { sender, commits, repository, ref } = data
    ref = ref.substr(11)
    let name = sender.login
    let count = commits.length
    if (count === 0) return
    let head = `## ${name}
#### [**${count} new commit**](${commits[commits.length - 1].url}) pushed to [**${ref}**](${repository.html_url}/tree/${ref})`
    let middle = ''
    for (let i = 0; i < count; i++) {
        let { id, url, message } = commits[i]
        middle += `
> [**${id.substr(0, 8)}**](${url}) - ${message}
`
    }

    let footer = `[**${repository.full_name}**](${repository.html_url})`
    return head + middle + footer
}

function get_comment_msg(data) {
    let { action, comment, repository, sender } = data,
        name = sender.login
    return {
        title: repository.full_name,
        description: `${name} ${action} comment`,
        action: comment.html_url
    }
}

function get_pr_msg(data) {
    let { action, sender, pull_request, repository } = data,
        name = sender.login,
        pull_request_name = pull_request.url.substring(pull_request.url.indexOf('/pulls/') + 7)
    if (action === 'labeled') return
    if (action === 'closed') action = pull_request.merged ? 'merged' : 'unmerged'
    return {
        title: repository.full_name,
        description: `${name} ${action} PR#${pull_request_name}`,
        action: pull_request.html_url
    }
}


function get_issue_comment_msg(data) {
    let { action, issue, sender, repository } = data,
        name = sender.login
    return {
        title: repository.full_name,
        description: `${name} ${action} issue comment`,
        action: issue.html_url
    }
}

function get_issues_msg(data) {
    let { action, issue, sender, repository } = data,
        name = sender.login
    return {
        title: repository.full_name,
        description: `${name} ${action} issues`,
        action: issue.html_url
    }

}

function get_create_branch_or_tag_msg(data) {
    let { sender, ref, ref_type, repository } = data,
        name = sender.login
    return {
        title: repository.full_name,
        description: `${name} create ${ref_type} #${ref}`,
        action: repository.html_url
    }
}

function get_delete_branch_or_tag_msg(data) {
    let { sender, ref, ref_type, repository } = data,
        name = sender.login
    return {
        title: repository.full_name,
        description: `${name} delete ${ref_type} #${ref}`,
        action: repository.html_url
    }
}
function get_release_msg(data) {
    let { action, release, sender, repository } = data,
        name = sender.login
    return {
        title: repository.full_name,
        description: `${name} ${action} release`,
        action: release.html_url
    }
}




function get_message_transfer(data, type) {
    switch (type) {
        case 'push':
            return get_push_msg(data)
        case 'commit_comment':
            return get_comment_msg(data)
        case 'pull_request':
            return get_pr_msg(data)
        case 'issue_comment':
            return get_issue_comment_msg(data)
        case 'issues':
            return get_issues_msg(data)
        case 'create':
            return get_create_branch_or_tag_msg(data)
        case 'delete':
            return get_delete_branch_or_tag_msg(data)
        case 'release':
            return get_release_msg(data)
        default:
            return undefined
    }
}

module.exports = get_message_transfer