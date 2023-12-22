import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  // call it whatever you want "text" ,function or method used is called setText and were destructuring it from useState
  const [text, setText] = useState('');
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* @TODO - rating select component*/}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="write review"
            value={text}
          />
          <Button type="submit" version="primary">
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
