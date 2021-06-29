import { User } from './User';
import { Company } from './Company';
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
console.log('user:' + JSON.stringify(user));
console.log('user:' + JSON.stringify(company));
const customMap = new CustomMap('map');

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);