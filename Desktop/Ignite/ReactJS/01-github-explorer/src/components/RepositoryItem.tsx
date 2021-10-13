interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    languages_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name.toUpperCase() ?? "Default"}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar Projeto</a>
    </li>
  );
}
