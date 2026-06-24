import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import './Tab3.css';
import { fetchUserInfo } from '../services/GithubService';
import React from 'react';
import { GithubUser } from '../interfaces/GithubUser';
import LoadingSpinner from '../components/LoadingSpinner';

const Tab3: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("")
  const [userInfo, setUserInfo] = React.useState<GithubUser | null>(null);

  useIonViewDidEnter(() => {
    setLoading(true);
    fetchUserInfo()
      .then((githubUser) => setUserInfo(githubUser))
      .catch((error) => setErrorMsg("Error al cargar usuario. " + error))
      .finally(() => setLoading(false))
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="card-contaider">
          {userInfo && (
            <IonCard className="card">
              <img src={userInfo.avatar_url} alt={userInfo.login}/>
              <IonCardHeader>
                <IonCardTitle>{userInfo.name}</IonCardTitle>
                <IonCardSubtitle>{userInfo.login}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{userInfo.bio}</p>
              </IonCardContent>
            </IonCard>
          )}
          {errorMsg !== "" && <IonText color="danger">{errorMsg}</IonText>}
        </div>
        {loading && <LoadingSpinner />}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
