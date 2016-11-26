import React from 'react';
import {buildURI} from '../core';
import {defaultProps as CommonDefaultProps, PropTypes} from '../metaProps';

const defaultProps = {
  target: '_blank'
};
class CSVDownload extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.page = window.open(buildURI(this.props.data, this.props.headers), this.props.target, this.props.specs, this.props.replace);
  }

  getWindow() {
    return this.page;
  }

  render(){
    return (null)
  }
}

CSVDownload.defaultProps = Object.assign(
  CommonDefaultProps,
  defaultProps
);
CSVDownload.PropTypes = PropTypes;

export default CSVDownload;
