import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export function New() {
  const [ title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [ links, setLinks ] = useState([])
  const [ newLink, setNewLink ] = useState("")

  const [ tags, setTags ] = useState([])
  const [ newTag, setNewTag ] = useState("")

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleDeleteLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }


  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleDeleteTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Digite um título para a nota!")
    }

    if(newLink) {
      return alert("Existe um Link no campo sem adicionar, clique em adicioná-lo.")
    }

    if(newTag) {
      return alert("Existe uma Tag no campo sem adicionar, clique em adicioná-la.")
    }

    await api.post("/notes", {
      title,
      description,
      links,
      tags
    })

    alert("Nota criada com sucesso!")
    navigate(-1)
  }

  return(
    <Container>
      <Header/> 

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />

          <TextArea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem 
                  key={String(index)}
                  value={link}
                  onClick={() => handleDeleteLink(link)}
                />
              ))
            }

            <NoteItem 
            isNew 
            placeholder="Novo Link"
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleDeleteTag(tag)}
                  /> 
                ))
              }
              
              <NoteItem 
                isNew 
                placeholder="Nova Tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title="Salvar" 
            onClick={handleNewNote}
          />
          
        </Form>
      </main>
    </Container>
  )
}