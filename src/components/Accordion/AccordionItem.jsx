export default function AccordionItem({ className, title, children }) {
  return (
    <li className={className}>
      <h>{title}</h>
      <div>{children}</div>
    </li>
  );
}
