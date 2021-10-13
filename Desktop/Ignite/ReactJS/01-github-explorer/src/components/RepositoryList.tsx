import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";


//https://api.github.com/users/GuilhermeCardoso93/repos

import "../styles/repositories.scss";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/GuilhermeCardoso93/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h2>Lista de Projetos</h2>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
