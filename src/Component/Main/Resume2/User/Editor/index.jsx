import React, {Component, Fragment} from 'react';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import "./index.css"

class Editor extends Component {
    // state = {
    //     // 创建一个空的editorState作为初始值
    //     editorState: BraftEditor.createEditorState(null)
    // }
    //
    // componentDidMount () {
    //     this.setState({
    //         editorState: BraftEditor.createEditorState("")
    //     })
    // }

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
            "headings", "list-ul", "list-ol"
        ]

        return (
            <div className="my-component">
                <BraftEditor
                    value={this.props.content}
                    onChange={this.handleEditorChange}
                    language={languageFn}
                    controls={controls}
                    fontSizes={[12,14,16,18]}
                    contentClassName="editor-style"
                    controlBarClassName="editor-bar-style"
                />
            </div>
        )

    }

}

export default Editor;
