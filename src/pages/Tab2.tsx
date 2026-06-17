import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
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
          />
          <IonTextarea
            className="form-field"
            label="Descripcion del repositorio"
            labelPlacement="floating"
            placeholder="Ingrese la descripcion del respositorio"
            rows={6}
          />
          <IonButton
            className="form-field"
            expand="block"
            shape="round"
            color="primary"
          >
            Guardar 
          </IonButton>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
