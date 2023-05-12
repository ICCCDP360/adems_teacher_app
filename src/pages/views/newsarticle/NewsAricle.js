
import React from 'react'
// import './styles/TestSpace.scss'
import NewsHeader from './NewsHeader'
import NewsArticleContent from './NewsArticleContent'

function NewsArticle() {
  return (
    <div className="main-container-profilemain">
      <NewsHeader />
      <hr className="hr-main-sub-container" />
      <NewsArticleContent />
    </div>
  )
}

export default NewsArticle