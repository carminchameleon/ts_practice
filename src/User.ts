import faker from 'faker';

// type definition file 을 매뉴얼로 해야한다. -> @type/{library name}
// string 을 Number로 바꿀 때 사용한 메소드 : parseFloat()

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
