import Tag from '../../components/tag';
import React from 'react';

import './style.scss';

export default function TagsContainer({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  );
}
