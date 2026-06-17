import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
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
          <IonCard className="card">
            <img src="https://logodownload.org/wp-content/uploads/2020/02/barcelona-sc-logo-6.png" alt="Avatar" />
            <IonCardHeader>
              <IonCardTitle>Mateo Rivera Escalante</IonCardTitle>
              <IonCardSubtitle>mateoriveraescalante</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                Desarrollador de software con experiencia en 
                  aplicaciones moviles, hincha a muerte del idolo 
                  del Ecuador, Ecuatoriano!
            </IonCardContent>
          </IonCard>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
