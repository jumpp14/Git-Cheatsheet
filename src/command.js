import React from 'react';
import { Tooltip } from "react-tippy";
import 'react-tippy/dist/tippy.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './styles.css';

class Command extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      copied: false,
    }
  }

  render() {
  	return (
  		<div className="card-body">
			<Tooltip offset="-130px" title="Copied!" trigger="click" hideDelay="1000" inertia="true" arrow="true" ref={tooltip => (this.tooltip = tooltip)}>
		    	<CopyToClipboard text={this.props.command} onCopy={() => this.setState({copied: true})}>
		          <button className="command" onMouseLeave={() => this.tooltip.hideTooltip()}>{this.props.command}</button>
		    	</CopyToClipboard>
		    	<p className="description">{this.props.description}</p>
	    	</Tooltip>
    	</div>
  		)
  }
}

export default Command;