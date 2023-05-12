import React from 'react'
import TestSpaceHeader from './TestSpaceHeader'
import TestSpaceContent from './TestSpaceContent'
import './styles/TestSpace.scss'

function TestSpace() {
  return (
    <div className="main-container-profilemain">
      <TestSpaceHeader />
      <hr className="hr-main-sub-container" />
      <TestSpaceContent />
    </div>
  )
}

export default TestSpace