import React, { useState } from 'react';
import './App.css';
import useArticles from './repository';

export default function App() {
  const articles = useArticles();

  const [formObject, setFormObject] = useState({ title: 'title1', content: 'content1' });

  const [selectedArticleId, setSelectedArticleId] = useState(-1);

  const selectedArticle = articles.byId(selectedArticleId)?.content || 'none';

  const changeHandler = function (event) {
    const name = event.target.name;
    const value = event.target.value;
    formObject[name] = value;
    setFormObject({ ...formObject })
  }

  return (
    <div className={'app'}>
      <h2>React Custom Hooks App</h2>
      <ul>
        {articles.list().map(
          (article, index) => {
            return <li
              key={index}
              className={(selectedArticleId === index) ? 'selected' : ''}
              onClick={(event) => setSelectedArticleId(index)}>
              {article.title}
            </li>
          }
        )
        }
      </ul>
      <br />
      <span className={'bold'}>Selected Article:</span>
      <p>{selectedArticle}</p>
      <br />
      <div className={'controls'}>
        <span className={'bold'}>Controls:</span><br />
        <button 
          onClick={() => articles.add(formObject.title, formObject.content)}>
            Add
        </button>
        <button 
          onClick={() => articles.delete(selectedArticleId)} 
          disabled={!articles.isValidId(selectedArticleId)}>
            Delete
        </button>
        <br />
        <input type={'text'} name={'title'}
          placeholder={'title'} value={formObject.title}
          onChange={(e) => changeHandler(e)}
        /><br />
        <input type={'text'} name={'content'}
          placeholder={'content'} value={formObject.content}
          onChange={(e) => changeHandler(e)}
        /><br />
      </div>
    </div >
  );
}