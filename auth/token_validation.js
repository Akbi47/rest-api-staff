import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export function checkToken(req, res, next) {
  let token = req.get('authorization')
  if (token !== undefined) {
    // Remove Bearer from string
    token = token.slice(7)
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.json({
          success: 0,
          message: 'Invalid Token...',
        })
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    return res.json({
      success: 0,
      message: 'Access Denied! Unauthorized User',
    })
  }
}
