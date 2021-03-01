import { EntityRepository, Repository } from 'typeorm';

import SurveyUser from '../entities/SurveyUser';

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser> {}

export default SurveysUsersRepository;
