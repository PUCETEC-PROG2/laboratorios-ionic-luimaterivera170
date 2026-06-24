import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTextarea, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import './Tab2.css';
import { useHistory } from 'react-router';
import React, { useState } from 'react';
import { RepositoryPayload } from '../interfaces/RepositoryPayload';
import { createRepository } from '../services/GithubService';
import LoadingSpinner from '../components/LoadingSpinner';

const Tab2: React.FC = () => {


  const history = useHistory();
  const [repositoryData, setRepositoryData] = useState<RepositoryPayload>({
    name: "",
    description: ""
  });
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const saveRepo = async() => {
    if(repositoryData.name.trim() === '') {
      setErrorMsg("El nombre del repositorio es obligatorio");
      return
    }
    setLoading(true);
    createRepository(repositoryData)
      .then(() => history.push("/tab1"))
      .catch((error) => setErrorMsg("Error al crear repositorio. " + error))
      .finally(() => { 
        setLoading(false);
        setRepositoryData({
          name: "",
          description: ""
        });
      });
  };

  useIonViewDidEnter(() => {
    setErrorMsg("");
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario de Repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulario de Repositorio</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="form-container">
          <IonInput
            className="form-field"
            label="Nombre del repositorio"
            labelPlacement="floating"
            placeholder="Ingrese el nombre del respositorio"
            value={repositoryData.name}
            onIonChange={(e) => setRepositoryData({...repositoryData, name: e.detail.value!})}
          />
          <IonTextarea
            className="form-field"
            label="Descripcion del repositorio"
            labelPlacement="floating"
            placeholder="Ingrese la descripcion del respositorio"
            value={repositoryData.description}
            onIonChange={(e) => setRepositoryData({...repositoryData, description: e.detail.value!})}
            rows={6}
          />
          {errorMsg != "" && <IonText color="danger"></IonText>}
          <IonButton
            className="form-field"
            expand="block"
            shape="round"
            color="primary"
            onClick={saveRepo}
          >
            Guardar 
          </IonButton>
        </div>
        {loading && <LoadingSpinner />}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
