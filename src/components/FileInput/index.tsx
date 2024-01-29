import { ChangeEvent, FC } from 'react';
import icon from '@/assets/image_2024-01-27/image.png';
import Image from 'next/image';

type FileInputProps = {
  onChange: (file: File | undefined) => void;
};

const FileInput: FC<FileInputProps> = ({ onChange }) => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log('Arquivo selecionado:', file);
    onChange(file);
  };

  return (
    <label style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{
        width: '88px',
        height: '88px',
        borderRadius: '2.25rem',
        border: 'solid 1px #4b4b4b',
        overflow: 'hidden',
      }}>
        <Image
          src={icon} // Substitua por sua lógica para exibir a imagem
          alt=""
          width={88}
          height={88}
          objectFit="contain"
        />
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{
          display: 'none',
        }}
      />
    </label>
  );
};

export default FileInput;
