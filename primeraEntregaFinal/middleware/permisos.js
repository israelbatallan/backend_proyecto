export const middlewareUserLogueado = (req, res, next) => {
    req.user = {
        fullName: "Juan Perez",
        isAdmin: true,
    };
    next();
};

export const middlewareIsAdmin = (req, res, next) => {
 req.user.isAdmin
        ? next()
        : res.status(403).send({
              error: -1,
              descripcion: `ruta ${req.originalUrl} y metodo ${req.method} no autorizada`,
          });
};