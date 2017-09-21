module.exports = {
    "helpers": {
        "if_or": function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "Enter your component name. It should be the same as the npm module name"
        },
        "description": {
            "type": "string",
            "required": false,
            "message": "Project/component description",
            "default": "My vue component"
        },
        "author": {
            "type": "string",
            "required": true,
            "message": "Author"
        },
        "repository": {
            "type": "confirm",
            "message": "Do you want to add a github repository ?"
        },
        "repositoryConfig": {
            "when": "repository",
            "type": "string",
            "message": "Type your github repository `{username}/{repository-name}`"
        },
        "sass": {
            "type": "confirm",
            "message": "Shall we add sass support?"
        }
    },
    "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\n"
}
