// file main là nơi liên kết với html

import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './_app.jsx'
// chèn nội dung của thẻ do chúng ta tự tạo App  vào thẻ root
createRoot(document.getElementById('root')).render(
//  React.createElement("p", {}, "hello world")
  // React.createElement("div" ,{className: "card"},
  //   React.createElement("div", {className:"card-content"},"header"),
  //   React.createElement("div",{className:"card-content"},"content")
  // )
  <App></App>
);

// viết hoa chữ cái đầu thẻ do mình tạo- phân biệt với thẻ html

