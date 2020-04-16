import React, { useState } from "react";

export const CommitForm = props => {
  const { updateOwnerAndRepo } = props

  const [repoForm, setRepoForm] = useState({
    owner: "",
    repo: ""
  });
  const { owner, repo } = repoForm;

  const updateInput = e => setRepoForm({ ...repoForm, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault()
    updateOwnerAndRepo(owner, repo)
  }

  return (
    <section>
      <h2>Enter Owner & Repo info</h2>
      {/* <form onSubmit={e => fetchCommits(e, owner, repo)}> */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='owner'
          value={owner}
          onChange={event => setRepoForm({ ...repoForm, [event.target.name]: event.target.value })}
          placeholder='Enter github owner'
        />
        <input
          type='text'
          name='repo'
          value={repo}
          onChange={updateInput}
          placeholder='Enter github repository'
        />
        <input type='submit' value='Fetch!' />
      </form>
    </section>
  );
};
