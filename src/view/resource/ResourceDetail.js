import React, {Component, PropTypes} from 'react';
import {Modal, Form, Spin, Button, Input, InputNumber} from 'antd';

import constant from '../../constant/constant';
import style from '../style.css';

class ResourceDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleSubmit() {
    this.props.form.validateFields((errors, values) => {
      if (!!errors) {
        return;
      }

      this.props.handleSubmit(values);
    });
  }

  handleCancel() {
    this.props.handleCancel();
  }

  handleReset() {
    this.props.form.resetFields();
  }

  render() {
    const FormItem = Form.Item;
    const {getFieldDecorator} = this.props.form;

    return (
      <Modal title={'资源表单'} maskClosable={false} width={constant.detail_width}
             visible={this.props.is_detail} onCancel={this.handleCancel.bind(this)}
             footer={[
               <Button key="back" type="ghost" size="default" icon="cross-circle"
                       onClick={this.handleCancel.bind(this)}>关闭</Button>,
               <Button key="submit" type="primary" size="default" icon="check-circle"
                       loading={this.props.is_load}
                       onClick={this.handleSubmit.bind(this)}>确定</Button>
             ]}
      >
        <Spin spinning={this.props.is_load}>
            <FormItem hasFeedback {...constant.formItemLayoutDetail} className={style.formItem}
                      style={{width: constant.detail_form_item_width}} label="资源类型">
              {
                getFieldDecorator('resource_type', {
                  rules: [{
                    required: true,
                    message: constant.required
                  }],
                  initialValue: ''
                })(
                  <Input type="text" placeholder={constant.placeholder + '资源类型'}/>
                )
              }
            </FormItem>
            <FormItem hasFeedback {...constant.formItemLayoutDetail} className={style.formItem}
                      style={{width: constant.detail_form_item_width}} label="资源名称">
              {
                getFieldDecorator('resource_name', {
                  rules: [{
                    required: true,
                    message: constant.required
                  }],
                  initialValue: ''
                })(
                  <Input type="text" placeholder={constant.placeholder + '资源名称'}/>
                )
              }
            </FormItem>
            <FormItem hasFeedback {...constant.formItemLayoutDetail} className={style.formItem}
                      style={{width: constant.detail_form_item_width}} label="资源键值">
              {
                getFieldDecorator('resource_key', {
                  initialValue: ''
                })(
                  <Input type="text" placeholder={constant.placeholder + '资源键值'}/>
                )
              }
            </FormItem>
            <FormItem hasFeedback {...constant.formItemLayoutDetail} className={style.formItem}
                      style={{width: constant.detail_form_item_width}} label="资源数值">
              {
                getFieldDecorator('resource_value', {
                  initialValue: ''
                })(
                  <Input type="text" placeholder={constant.placeholder + '资源数值'}/>
                )
              }
            </FormItem>
            <FormItem hasFeedback {...constant.formItemLayoutDetail} className={style.formItem}
                      style={{width: constant.detail_form_item_width}} label="资源排序">
              {
                getFieldDecorator('resource_sort', {
                  rules: [{
                    required: true,
                    message: constant.required
                  }],
                  initialValue: 0
                })(
                  <InputNumber type="text" className={style.formItemInput} placeholder={constant.placeholder + '资源排序'}
                             min={0} max={999}/>
                )
              }
            </FormItem>
        </Spin>
      </Modal>
    );
  }
}

ResourceDetail.propTypes = {
  is_load: React.PropTypes.bool.isRequired,
  is_detail: React.PropTypes.bool.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  handleCancel: React.PropTypes.func.isRequired
};

ResourceDetail = Form.create({
  withRef: true
})(ResourceDetail);

export default ResourceDetail;
