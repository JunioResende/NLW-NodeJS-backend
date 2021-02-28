import { EntityRepository, Repository } from 'typeorm';

import Survey from '../entities/Survey';

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey> {}

export default SurveysRepository;
