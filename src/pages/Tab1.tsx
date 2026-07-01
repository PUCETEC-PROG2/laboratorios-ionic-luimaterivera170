import { IonContent, IonHeader, IonList, IonPage, IonText, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Tab1.css';
import RepoItem from '../components/RepoItem';
import React from 'react';
import { Repository } from '../interfaces/Repository';
// Modificado: Traemos deleteRepository y updateRepository de tu servicio
import { fetchRepositories, deleteRepository, updateRepository } from '../services/GithubService';
import LoadingSpinner from '../components/LoadingSpinner';

const Tab1: React.FC = () => {

    const [repositoryList, setRepositoryList] = React.useState<Repository[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");

    const loadRepos = async () => {
      setLoading(true);
      fetchRepositories()
      .then((reposData) => setRepositoryList(reposData))
      .catch((error) => setErrorMsg("Error al cargar repositorios. " + error))
      .finally(()=> setLoading(false));
    
    };

    useIonViewWillEnter(() => {
      loadRepos();
    });

    // 1. Lógica DELETE - Alerta de confirmación nativa sin errores de tipado
    const handleDeleteRepo = (owner: string, repoName: string) => {
      const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar permanentemente el repositorio "${repoName}"?`);
      if (confirmacion) {
        setLoading(true);
        deleteRepository(owner, repoName)
          .then(() => {
            window.alert("¡Repositorio eliminado con éxito!");
            loadRepos(); // Actualización dinámica de la lista
          })
          .catch((err) => {
            window.alert("No se pudo eliminar el repositorio: " + err.message);
          })
          .finally(() => setLoading(false));
      }
    };

    // 2. Lógica PATCH - Ventana prompt nativa para cambiar datos
    const handleEditRepo = (owner: string, repoName: string) => {
      const nuevoNombre = window.prompt("Ingrese el nuevo nombre del repositorio:", repoName);
      
      // Validación básica: canceló o vacío
      if (nuevoNombre === null) return; 
      if (nuevoNombre.trim() === "") {
        window.alert("El nombre no puede estar vacío.");
        return;
      }

      const nuevaDesc = window.prompt("Ingrese la nueva descripción del repositorio:");
      if (nuevaDesc === null) return;

      setLoading(true);
      updateRepository(owner, repoName, nuevoNombre.trim(), nuevaDesc.trim())
        .then(() => {
          window.alert("¡Repositorio actualizado correctamente!");
          loadRepos(); // Actualización dinámica de la lista
        })
        .catch((err) => {
          window.alert("No se pudo actualizar el repositorio: " + err.message);
        })
        .finally(() => setLoading(false));
    };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {repositoryList.map((repo) => (
            <RepoItem 
              key={repo.id}
              {...repo} 
              // Pasamos las funciones como propiedades (props) al componente hijo
              onEdit={() => handleEditRepo(repo.owner.login, repo.name)}
              onDelete={() => handleDeleteRepo(repo.owner.login, repo.name)}
            />
          ))}
        </IonList> 
        
        {loading && <LoadingSpinner />}
        {errorMsg !== "" &&
          (<IonText color={'danger'}>
            <p>{errorMsg}</p>
          </IonText>)
        }
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;