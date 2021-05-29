import React, {Component, Fragment} from 'react';

class Item extends Component {


    render() {
        const {HTMLContent} = this.props

        return (
            <Fragment>
               <div style={{marginBottom: 3 ,marginLeft: 40,marginRight: 40,lineHeight: 0.7, whiteSpace: "pre-wrap",wordWrap: "break-word"}} dangerouslySetInnerHTML={{__html: HTMLContent}}>

               </div>
            </Fragment>
        );
    }
}

export default Item;
