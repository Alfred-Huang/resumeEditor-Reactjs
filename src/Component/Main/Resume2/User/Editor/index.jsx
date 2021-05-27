import React, {Component, Fragment} from 'react';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import "./index.css"

class Editor extends Component {

    handleEditorChange = (editorState) => {
        this.props.handleContent(editorState)
    }

    render () {
        const languageFn = (languages, context) => {
            if (context === 'braft-editor') {
                languages.en.controls.clear = '清空'
                return languages.en
            }

        }

        const controls = ['bold', 'italic', 'underline', 'font-size',
            "line-height", "list-ul", "list-ol"
        ]

        return (
            <div className="my-component">
                <BraftEditor
                    value={this.props.content}
                    onChange={this.handleEditorChange}
                    language={languageFn}
                    controls={controls}
                    lineHeights={[0.7,0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6]}
                    fontSizes={[12,13,14,15,16,17]}
                    contentClassName="editor-style"
                    controlBarClassName="editor-bar-style"
                />
            </div>
        )

    }

}

export default Editor;
