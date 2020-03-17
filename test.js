const { Mixin } = require('mixin-node-sdk')

const func = require('./message')
let client = new Mixin({
    "client_id": "c26ec48e-d626-4106-9f30-ff6a69783369",
    "client_secret": '52e02740d0ec12ff179c618adad70150647bd802aebd0a6a1e2c344fb9fa4ce0',
    "pin": "789086",
    "session_id": "3cd78d8e-ddd0-4eaa-b78e-cfd4a5521e6a",
    "pin_token": "VX8NPQaYGQYtDVYjDtAb2S9IBfsJXEeaLnpr9YLDJ2RGeA1W+mdAHcpWGULiX6N2J7y/SAFZ91ILQtn3EH77taX5mNgocfJd2JunlArLCWJ7lJg/AvIh8IX12+/663s6eKFzIxauQL0vLEVLNKIsmArg1tz8VDNllzONlCKwDvY=",
    "private_key": "-----BEGIN RSA PRIVATE KEY-----\r\nMIICXQIBAAKBgQCeeICSpTfJu9RNVqc5QHpUgU1jLq7D70ngPY49+vlh1j/aEEvw\r\nmUnPyWfuFvlYl1nahjHnkDtzOwVqNVHZbM+ec1l/+JrXFtdLqAOA5EJgjfJs1/pU\r\n+amMw38+64awHZfvhjZjAiL6Uodvjyf2f71lSeKcgjAPWLX7dSfHaDihuQIDAQAB\r\nAoGAZZ9q/B99Xh3YcFwQUrOZfxWINgFay4Vo/6cZz39hay9EtSdcO4dhgSFsR49u\r\nCTTNx0flOtUQer2vpENbIK4ZmUTa8XHICAkJRhHUCk36pywPeSOiGQO9MoAHlrt5\r\nVbQ9cfX+1A6wsxlmC4HfG2TMjCgR8i3zcSRtL6CLbWwnAzECQQDZHPn0iqn3+7H0\r\ncJLFMbX7+s/yQMg+leVB9I9Oy/PckmR3S1ynNB1pdevUj/z8vrU+abrNCjjDmp8M\r\nSfP59woVAkEAutqqIgxBKqrA4VZekrim398OuzllhA11PsGFgjUYxYZ4jNbTX6+O\r\nnjk0yS26axlWZSLF8alLYmUF49/UhHsWFQJAcgfzDEpMDTAH/j+mBqYeU/MehrkZ\r\nsy1dVO/S2Orr8Px+gd12E2eezwYdT+40TLcJUHeNoiVtPOcYBAdPegkTJQJBAK8F\r\noTURO31GwjKQHzfZhF3QZtESOzeND5R/2pmTOKfUhFiP5SAMpk8okHwcvDATZKyI\r\n/NaW2AjLTdAb2claLd0CQQDEDHW4zeCI2elWhoHpdFLZqqH/UnqUA4nELGwpARGr\r\nH1wJjI7J7veKR0TxKX6xll8knnWo2SIN67Sj4QAHEiF9\r\n-----END RSA PRIVATE KEY-----\r\n"
})


let recipient_id = 'e8e8cd79-cd40-4796-8c54-3a13cfe50115'
let data = func({
    "ref": "refs/heads/master",
    "before": "b9ae736804f3951ee76ae49d2792088443230cfe",
    "after": "77a88ffcca1630264c3d170b876ec92b2c2b6190",
    "repository": {
        "id": 237438864,
        "node_id": "MDEwOlJlcG9zaXRvcnkyMzc0Mzg4NjQ=",
        "name": "TEST3",
        "full_name": "liuzemei/TEST3",
        "private": false,
        "owner": {
            "name": "liuzemei",
            "email": "her_liu@qq.com",
            "login": "liuzemei",
            "id": 35027683,
            "node_id": "MDQ6VXNlcjM1MDI3Njgz",
            "avatar_url": "https://avatars2.githubusercontent.com/u/35027683?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/liuzemei",
            "html_url": "https://github.com/liuzemei",
            "followers_url": "https://api.github.com/users/liuzemei/followers",
            "following_url": "https://api.github.com/users/liuzemei/following{/other_user}",
            "gists_url": "https://api.github.com/users/liuzemei/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/liuzemei/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/liuzemei/subscriptions",
            "organizations_url": "https://api.github.com/users/liuzemei/orgs",
            "repos_url": "https://api.github.com/users/liuzemei/repos",
            "events_url": "https://api.github.com/users/liuzemei/events{/privacy}",
            "received_events_url": "https://api.github.com/users/liuzemei/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/liuzemei/TEST3",
        "description": null,
        "fork": false,
        "url": "https://github.com/liuzemei/TEST3",
        "forks_url": "https://api.github.com/repos/liuzemei/TEST3/forks",
        "keys_url": "https://api.github.com/repos/liuzemei/TEST3/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/liuzemei/TEST3/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/liuzemei/TEST3/teams",
        "hooks_url": "https://api.github.com/repos/liuzemei/TEST3/hooks",
        "issue_events_url": "https://api.github.com/repos/liuzemei/TEST3/issues/events{/number}",
        "events_url": "https://api.github.com/repos/liuzemei/TEST3/events",
        "assignees_url": "https://api.github.com/repos/liuzemei/TEST3/assignees{/user}",
        "branches_url": "https://api.github.com/repos/liuzemei/TEST3/branches{/branch}",
        "tags_url": "https://api.github.com/repos/liuzemei/TEST3/tags",
        "blobs_url": "https://api.github.com/repos/liuzemei/TEST3/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/liuzemei/TEST3/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/liuzemei/TEST3/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/liuzemei/TEST3/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/liuzemei/TEST3/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/liuzemei/TEST3/languages",
        "stargazers_url": "https://api.github.com/repos/liuzemei/TEST3/stargazers",
        "contributors_url": "https://api.github.com/repos/liuzemei/TEST3/contributors",
        "subscribers_url": "https://api.github.com/repos/liuzemei/TEST3/subscribers",
        "subscription_url": "https://api.github.com/repos/liuzemei/TEST3/subscription",
        "commits_url": "https://api.github.com/repos/liuzemei/TEST3/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/liuzemei/TEST3/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/liuzemei/TEST3/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/liuzemei/TEST3/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/liuzemei/TEST3/contents/{+path}",
        "compare_url": "https://api.github.com/repos/liuzemei/TEST3/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/liuzemei/TEST3/merges",
        "archive_url": "https://api.github.com/repos/liuzemei/TEST3/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/liuzemei/TEST3/downloads",
        "issues_url": "https://api.github.com/repos/liuzemei/TEST3/issues{/number}",
        "pulls_url": "https://api.github.com/repos/liuzemei/TEST3/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/liuzemei/TEST3/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/liuzemei/TEST3/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/liuzemei/TEST3/labels{/name}",
        "releases_url": "https://api.github.com/repos/liuzemei/TEST3/releases{/id}",
        "deployments_url": "https://api.github.com/repos/liuzemei/TEST3/deployments",
        "created_at": 1580478395,
        "updated_at": "2020-02-18T12:49:20Z",
        "pushed_at": 1582030361,
        "git_url": "git://github.com/liuzemei/TEST3.git",
        "ssh_url": "git@github.com:liuzemei/TEST3.git",
        "clone_url": "https://github.com/liuzemei/TEST3.git",
        "svn_url": "https://github.com/liuzemei/TEST3",
        "homepage": null,
        "size": 28,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 2,
        "license": null,
        "forks": 0,
        "open_issues": 2,
        "watchers": 0,
        "default_branch": "master",
        "stargazers": 0,
        "master_branch": "master"
    },
    "pusher": {
        "name": "liuzemei",
        "email": "her_liu@qq.com"
    },
    "sender": {
        "login": "liuzemei",
        "id": 35027683,
        "node_id": "MDQ6VXNlcjM1MDI3Njgz",
        "avatar_url": "https://avatars2.githubusercontent.com/u/35027683?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/liuzemei",
        "html_url": "https://github.com/liuzemei",
        "followers_url": "https://api.github.com/users/liuzemei/followers",
        "following_url": "https://api.github.com/users/liuzemei/following{/other_user}",
        "gists_url": "https://api.github.com/users/liuzemei/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/liuzemei/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/liuzemei/subscriptions",
        "organizations_url": "https://api.github.com/users/liuzemei/orgs",
        "repos_url": "https://api.github.com/users/liuzemei/repos",
        "events_url": "https://api.github.com/users/liuzemei/events{/privacy}",
        "received_events_url": "https://api.github.com/users/liuzemei/received_events",
        "type": "User",
        "site_admin": false
    },
    "created": false,
    "deleted": false,
    "forced": false,
    "base_ref": null,
    "compare": "https://github.com/liuzemei/TEST3/compare/b9ae736804f3...77a88ffcca16",
    "commits": [
        {
            "id": "48b26314bf8736d1749338050015506ba0315298",
            "tree_id": "51b9e25010b4e64d6ed5fd0f1cbdc30ccb721fab",
            "distinct": true,
            "message": "1. haha",
            "timestamp": "2020-02-18T20:52:05+08:00",
            "url": "https://github.com/liuzemei/TEST3/commit/48b26314bf8736d1749338050015506ba0315298",
            "author": {
                "name": "liuzemei",
                "email": "her_liu@qq.com",
                "username": "liuzemei"
            },
            "committer": {
                "name": "liuzemei",
                "email": "her_liu@qq.com",
                "username": "liuzemei"
            },
            "added": [

            ],
            "removed": [

            ],
            "modified": [
                "message.js"
            ]
        },
        {
            "id": "0a76eea4bcdf19da793b7af3555ceba9919b138a",
            "tree_id": "11cc434bcb7de00a472958c76eb0adcbd4176a2a",
            "distinct": true,
            "message": "1. haha",
            "timestamp": "2020-02-18T20:52:14+08:00",
            "url": "https://github.com/liuzemei/TEST3/commit/0a76eea4bcdf19da793b7af3555ceba9919b138a",
            "author": {
                "name": "liuzemei",
                "email": "her_liu@qq.com",
                "username": "liuzemei"
            },
            "committer": {
                "name": "liuzemei",
                "email": "her_liu@qq.com",
                "username": "liuzemei"
            },
            "added": [

            ],
            "removed": [

            ],
            "modified": [
                "message.js"
            ]
        },
        {
            "id": "77a88ffcca1630264c3d170b876ec92b2c2b6190",
            "tree_id": "c682d0c675bfeb7fc93134ac829cd92b6c70dc3f",
            "distinct": true,
            "message": "1. haha",
            "timestamp": "2020-02-18T20:52:20+08:00",
            "url": "https://github.com/liuzemei/TEST3/commit/77a88ffcca1630264c3d170b876ec92b2c2b6190",
            "author": {
                "name": "liuzemei",
                "email": "her_liu@qq.com",
                "username": "liuzemei"
            },
            "committer": {
                "name": "liuzemei",
                "email": "her_liu@qq.com",
                "username": "liuzemei"
            },
            "added": [

            ],
            "removed": [

            ],
            "modified": [
                "message.js"
            ]
        }
    ],
    "head_commit": {
        "id": "77a88ffcca1630264c3d170b876ec92b2c2b6190",
        "tree_id": "c682d0c675bfeb7fc93134ac829cd92b6c70dc3f",
        "distinct": true,
        "message": "1. haha",
        "timestamp": "2020-02-18T20:52:20+08:00",
        "url": "https://github.com/liuzemei/TEST3/commit/77a88ffcca1630264c3d170b876ec92b2c2b6190",
        "author": {
            "name": "liuzemei",
            "email": "her_liu@qq.com",
            "username": "liuzemei"
        },
        "committer": {
            "name": "liuzemei",
            "email": "her_liu@qq.com",
            "username": "liuzemei"
        },
        "added": [

        ],
        "removed": [

        ],
        "modified": [
            "message.js"
        ]
    }
}, 'push')

console.log(data)

client.send_message({
    recipient_id, data, category: 'PLAIN_POST'
})