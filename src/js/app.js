/* eslint-disable no-console */
import Team from './modules/team';
import ErrorRepository from './modules/errorrepository';

const alex = {
  name: 'ALex',
  type: 'Zombie',
  attack: 40,
  defence: 10,
  health: 100,
  level: 1,
};

const vova = {
  name: 'Vova',
  type: 'Magician',
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
};

const dima = {
  name: 'Dima',
  type: 'Daemon',
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
};

const team = new Team();
team.addAll(alex, vova);
team.addAll(alex, vova);
team.addAll(alex);
team.add(vova);
team.add(dima);

team.toArray();

console.log(team.membersArr);
team.members.forEach((size) => console.log(size));

const error = new ErrorRepository();

console.log(error.translate(1001));
console.log(error.translate(1002));
