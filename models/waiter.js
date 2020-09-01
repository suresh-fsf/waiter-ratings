module.exports = (sequelize, DataTypes) => {
  // Creates a "Waiter" model that matches up with DB
  const Waiter = sequelize.define("Waiter", {
    name: DataTypes.STRING,
    rating: DataTypes.STRING,
    tipAmount: DataTypes.DECIMAL
  });

  Waiter.associate = models => {
    Waiter.belongsTo(models.Restuarant, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Waiter;
};
