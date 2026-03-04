<?php

namespace app\controllers\api;

use Yii;
use yii\web\Controller;
use yii\web\Response;
use app\models\News;

class NewsController extends Controller
{
    public function beforeAction($action)
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return parent::beforeAction($action);
    }

    public function actionView($slug)
    {
        $news = News::find()
            ->where(['slug' => $slug])
            ->one();

        if (!$news) {
            return [
                'status' => 'error',
                'message' => 'News not found'
            ];
        }

        return [
            'status' => 'success',
            'data' => $news
        ];
    }
}
