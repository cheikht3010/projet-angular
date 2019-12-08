export class AppareilService{
    appareils =[
        {
          id: 1,
          name: 'Programmation c',
          status : 'Disponible',
          Description : 'hello this cours is for '
        },
        {
          id: 2,
          name: 'Programmation java',
          status : 'Disponible',
          Description : 'hello this cours is for '
        },
        {
          id: 3,
          name: 'Programmation python',
          status : 'Disponible',
          Description : 'hello this cours is for '
        }
      ];

      getAppareilById(id: number){
        const appareil =this.appareils.find(
          (appareilObject)=>{
            return appareilObject.id===id;
          }
        );
        return appareil;
      }

      switchOnAll () {
          for(let appareil of this.appareils){
              appareil.status= 'Disponible'
          }
      }

      switchOffAll () {
        for(let appareil of this.appareils){
            appareil.status= 'indisponible'
        }
    }
    switchOnOne(index: number){
        this.appareils[index].status='Disponible'
    }
    switchOffOne(index: number){
        this.appareils[index].status='indisponible'
    }
}