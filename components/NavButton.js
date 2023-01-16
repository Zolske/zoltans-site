import Link from "next/link";

export default function NavButton({
  style,
  label,
  icon,
  title,
  subMenu = false,
  handleLinkClick,
  setShowLinks,
  page_title,
  page_description,
  page_background,
  index_link,
}) {
  return (
    <button
      className={style}
      aria-label={label}
      title={label}
      onClick={() =>
        handleLinkClick(page_title, page_description, page_background)
      }
      onMouseOver={() => setShowLinks(title)}
    >
      <Link href={index_link}>
        <i className={icon}></i>
        <span>{title}</span>
        {subMenu && <i className="bi bi-caret-down-square"></i>}
      </Link>
    </button>
  );
}
