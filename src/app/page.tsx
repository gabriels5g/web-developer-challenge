
'use client'
import { Button, Container, Feed, Footer, Forms, FormsContainer, FormsContent, Main, Post } from "@/app/index";
import { Header } from "@/components/Header";
import Image from "next/image";
import icon from '@/assets/image_2024-01-27/image.png';
import { FormEvent, useState } from "react";

type PostType = {
  id: number;
  name: string;
  mensage: string;
  image?: File;
};

export default function Home() {
  const [post, setPost] = useState<PostType[]>([]);
  const [name, setName] = useState('');
  const [mensage, setMensage] = useState('');
  const [image, setImagem] = useState<File>();

  const adicionarFeed = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name && mensage) {
      const newPost: PostType = {
        id: post.length + 1,
        name: name,
        mensage: mensage,
        image: image,
      };

      setPost([...post, newPost]);
      setName('');
      setMensage('');
      setImagem(undefined);
    }
  };

  const handleImagemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImagem(file);
  };

  return (
    <Container>
      <Header />
      <Main>
        <FormsContainer>
          <Forms onSubmit={adicionarFeed}>
            <label>
              <div>
                <Image src={icon} alt="" width={24} height={24} objectFit="contain"/>
              </div>
              <input type="file" accept="image/*" onChange={handleImagemChange} />
            </label>
            <FormsContent>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" />
              <textarea value={mensage} onChange={(e) => setMensage(e.target.value)} placeholder="Mensagem" />
              <Footer>
                <Button primary>Descartar</Button>
                <Button type="submit" secondary>
                  Publicar
                </Button>
              </Footer>
            </FormsContent>
          </Forms>
        </FormsContainer>
        <h1>Feed</h1>
        <Feed>
        {post.map((post) => (
          <Post key={post.id}>
            {post.image && (
              <Image
                src={URL.createObjectURL(post.image)}
                alt=""
                width={24}
                height={24}
              />
            )}
            <div>
              <p>{post.mensage}</p>
  
              <span>Enviado por: {post.name}</span>
            </div>
          </Post>
        ))}
        </Feed>
      </Main>
    </Container>
  );
}
