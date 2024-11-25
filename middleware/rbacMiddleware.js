module.exports = (requiredPermissions) => {
    return (req, res, next) => {
      const userRole = req.user.role;
      const userPermissions = userRole.permissions || [];
  
      if (!userPermissions.some((perm) => requiredPermissions.includes(perm))) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      next();
    };
  };
  