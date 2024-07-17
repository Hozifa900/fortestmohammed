import React from 'react'

export default function SidbarItem({img, title, active, activeLink, handleLinkClick}) {
  return (
    <a
  href="#home"
  className={activeLink === "#home" ? "active" : ""}
  onClick={() => handleLinkClick(active)}
>
<img
  src={img}
  style={{ width: "19.89px", height: "19.89px" }}
/>
    
  <span className="sidebar-text">{title}</span>
</a>
  )
}
