import { $http } from '../modules/index';

const prefix = '/maps/company';

class CompanyRest {
    static getAllCompany() {
        return $http.get(`${prefix}`);
    }
}

export default CompanyRest;
