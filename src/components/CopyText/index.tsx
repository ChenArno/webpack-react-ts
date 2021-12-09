/*
 * @Descripttion:
 * @Author: chenArno
 * @Date: 2021-12-08 12:55:03
 * @LastEditors: chenArno
 * @LastEditTime: 2021-12-08 15:50:07
 */
import React from "react";

import CopyToClipboard from 'react-copy-to-clipboard';
import { CopyOutlined } from '@ant-design/icons';
import { Tooltip, message } from 'antd';

interface CopyTextProps {
	title: string;
}
/**
 * @description const CopyRealText = CopyText();
 * @description	<CopyRealText title="sssss" />
 * @param title {String} 标题
 * 
*/
const CopyText = {
	ellipsis: {
		showTitle: false,
	},
	render: (props: CopyTextProps) => {
		const { title } = props

		const onCopy = (text: string, result: boolean) => {
			if (result) {
				message.success('复制成功')
			}
		}

		return <Tooltip placement="topLeft" title={() =>
			<div className="lay-text">
				<span style={{ marginRight: '10px' }}>{title}</span>
				<CopyToClipboard text={title}
					onCopy={onCopy}>
					<CopyOutlined className="lay-point" />
				</CopyToClipboard>
			</div>
		}>
			<a>{title}</a>
		</Tooltip>
	}
}

export default CopyText;