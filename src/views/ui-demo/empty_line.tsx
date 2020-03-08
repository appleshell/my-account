import React from 'react'
import EmptyLine from '../../components/empty-line'

const Demo = () => (
  <div>
    <h1 style={{ fontSize: '24px' }}>组件名称：空行（EmptyLine）</h1>
    <h2 style={{ fontSize: '20px' }}>基础用法</h2>
    <p>自定义组件，默认高度20px，背景色#fff。</p>
    <p>第一行文字</p>
    <EmptyLine />
    <p>第二行文字</p>
    <h2 style={{ fontSize: '20px' }}>自定义高度和背景色</h2>
    <p>第一行文字</p>
    <EmptyLine height={28} background="#aaa" />
    <p>第二行文字</p>
  </div>
)

export default Demo
