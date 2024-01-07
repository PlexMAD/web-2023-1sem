import React, { useEffect, useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };
  
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Новый пост:', { title, content });
      setTitle('');
      setContent('');
    };
  
    return (
      <div>
        <h1>Создание нового поста</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Заголовок:
            <input type="text" value={title} onChange={handleTitleChange} />
          </label>
          <br />
          <label>
            Содержание:
            <textarea value={content} onChange={handleContentChange} />
          </label>
          <br />
          <button type="submit">Опубликовать</button>
        </form>
      </div>
    );
  };
  
  export default Create;