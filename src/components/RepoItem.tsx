import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonThumbnail } from '@ionic/react';
import './RepoItem.css';
import React from 'react';
import { pencil, trash } from 'ionicons/icons';
import { Repository } from '../interfaces/Repository';

// Definimos qué propiedades extra (props) va a recibir el componente
interface RepoItemProps extends Repository {
  onEdit?: () => void;
  onDelete?: () => void;
}

const RepoItem: React.FC<RepoItemProps> = (repository) => {
  return (
    <IonItemSliding>
      <IonItem>
        <IonThumbnail slot='start'>
          <img src={repository.owner.avatar_url} alt={repository.name}/>
        </IonThumbnail>
        <IonLabel>
          <h3>{repository.name}</h3>
          <p>{repository.description}</p>
          {repository.language != null && repository.language !== "" && (
            <p>
              <strong>Lenguaje: </strong>
              {repository.language}
            </p>
          )}
        </IonLabel>
      </IonItem>

      <IonItemOptions>
        {/* Botón de Editar conectado a onEdit */}
        <IonItemOption onClick={repository.onEdit}>
          <IonIcon icon={pencil} slot='icon-only' />
        </IonItemOption>
        
        {/* Botón de Eliminar conectado a onDelete */}
        <IonItemOption color="danger" onClick={repository.onDelete}>
          <IonIcon icon={trash} slot='icon-only' />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default RepoItem;