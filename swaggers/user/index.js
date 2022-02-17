//------------------------------------------------------------ACOUNT------------------------------------------------------------
/**
 * @swagger
 * /account:
 *  get:
 *    tags: 
 *      - account
 *    description: Get all Users
 *    responses:
 *      '200':
 *        description: Success !
 */
/**
/**
* @swagger
*  /account/Login:
*    post:
*      consumes:
*        - application/json
*      tags:
*        - account
*      parameters:
*        - in: body
*          name: user
*          description: The user to create.
*          schema:
*            type: object
*            properties:
*              UserName:
*                type: string
*              Password:
*                type: string
*      responses:
*        '200':
*          description: Success !
*/
/**
* @swagger
*  /account/Register:
*    post:
*      consumes:
*        - application/json
*      tags:
*        - account
*      parameters:
*        - in: body
*          name: user
*          description: The user to create.
*          schema:
*            type: object
*            properties:
*              UserName:
*                type: string
*              Password:
*                type: string
*              FullName:
*                type: string
*              Email:
*                type: string
*              Role:
*                type: array
*      responses:
*        '200':
*          description: Success !
*/
/**
* @swagger
*  /account/{id}:
*    put:
*      consumes:
*        - application/json
*      tags:
*        - account
*      parameters:
*        - in: path
*          name: id
*        - in: body
*          name: user
*          description: The user to create.
*          schema:
*            type: object
*            properties:
*              UserName:
*                type: string
*              Password:
*                type: string
*              FullName:
*                type: string
*              Email:
*                type: string
*              Role:
*                type: array
*      responses:
*        '200':
*          description: Success !
*/
/**
* @swagger
*  /account/{id}:
*    delete:
*      consumes:
*        - application/json
*      tags:
*        - account
*      parameters:
*        - in: path
*          name: id
*      responses:
*        '200':
*          description: Success !
*/