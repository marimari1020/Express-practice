var express = require('express');

     /* express���擾���ϐ�express�֑�� */

var router = express.Router();


     /* express.Router=���W���[�����̃��[�g�n���h���[���쐬���� */
     /* ���[�e�B���O�p�u�~�j�A�v���P�[�V�����v */
     /* �~�j�A�v��Router��ϐ�router�ɑ�����Ă���H�H�H*/



router.get('/', function(req, res, next) {
     /* express.Router�ɂ�胋�[�g�iapp.js�ցH�j�A�N�Z�X������function���s*/

	res.send('respond with a resource');
     /* �v���I�u�W�F�N�g (req)�A�����I�u�W�F�N�g (res)�A���̃~�h���E�F�A�֐�next */
     /* req�Ares�Anext�����ꂩ���甽���ires)�������send���b�Z�[�W�𑗂�B*/
     /*respond with a resource�͕�����Ɍ��܂�̂Ȃ�������H�̂悤�ł����A*/
     /*���̃\�[�X������p����Ă���悤�ł��Ȃ��p�r���s���ł�*/

});


module.exports = router;


     /*module.exports���I�u�W�F�N�g�i�����\�������f�[�^�j��router(express.Router)�������Ă���B*/
