import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
      },
      { sequelize }
    );

    this.addHook('beforeSave', async user => {
      if (!user.password_hash) {
        user.password = await bcrypt.hash(user.password_hash, 8);
      }
    });

    return this;
  }
}

export default User;
