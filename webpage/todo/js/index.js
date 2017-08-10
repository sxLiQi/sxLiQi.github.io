/**
 * Created by Lenovo on 2017/7/13.
 */
var todos = [
    {
        id: 1,
        title: '列表1',
        color: '#1d8ce8',
        todoList: [
            {title: 'todoList1', done: false},
            {title: 'todoList2', done: false},
            {title: 'todoList3', done: false},
            {title: 'todoList4', done: true},
            {title: 'todoList5', done: true}
        ],
    },
    {
        id: 2,
        title: '列表2',
        color: '#ffbd27',
        todoList: [
            {title: 'todoList6', done: true},
            {title: 'todoList7', done: false},
            {title: 'todoList8', done: false},
        ],
    },
    {
        id: 3,
        title: '列表3',
        color: '#d63928',
        todoList: [
            {title: 'todoList9', done: false},
            {title: 'todoList10', done: true},
            {title: 'todoList11', done: false},
        ],
    }
];

angular.module('todo', [])
    .controller('todoCtrl', ['$scope', function ($scope) {
        $scope.todos = todos;
        $scope.index = $scope.todos.length - 1;
        $scope.selectIndex = function (index) {
            $scope.index = index;
            $scope.doneShow = false;
            $scope.setShow = false;
        }
        $scope.doneNum = function () {
            var index = 0;
            $scope.todos[$scope.index].todoList.forEach(function (v, i) {
                if (v.done) {
                    index++;
                }
            })
            return index;
        }

        //切换完成项
        $scope.doneShow = false;
        $scope.doneToggle = function () {
            $scope.doneShow = !$scope.doneShow;
        }
        $scope.colorArr= ["#1d8ce8", "#ffbd27", "#d63928", "#f12528", "#39b672", "#00c6bc", "#ff5e2a"];
        //添加列表
        $scope.addList = function () {
            var index = $scope.todos.length - 1
            var id = $scope.todos[index].id + 1;
            var color = $scope.colorArr[(index + 1) % 7];

            $scope.todos.push({
                    id: id,
                    title: '列表' + id,
                    color: color,
                    todoList: []
                }
            );

            $scope.index = $scope.todos.length - 1;
        }

        //添加内容
        $scope.addNewTodoList = function () {
            $scope.todos[$scope.index].todoList.push({
                title: '新增事项',
                done: false
            })
        }

        //切换内容状态
        $scope.changeStatus = function (v) {
            v.done = !v.done;

        }

        //列表设置
        $scope.setShow = false;
        $scope.setToggle = function () {
            $scope.setShow = !$scope.setShow;
            $scope.changeTitle = $scope.todos[$scope.index].title;
            $scope.changeColor = $scope.todos[$scope.index].color;
        }
        
        $scope.changeSet=function (color) {
            $scope.changeColor =color;
        }

        $scope.cancel=function () {
            $scope.setShow=!$scope.setShow;
        }

        $scope.sure=function () {
            $scope.todos[$scope.index].color=$scope.changeColor;
            $scope.todos[$scope.index].title=$scope.changeTitle;
            $scope.setShow=!$scope.setShow;
        }
        
        $scope.delList=function (index) {
            $scope.todos.splice(index,1);
            $scope.setShow=!$scope.setShow;
            $scope.index=$scope.todos.length-1;
        }

    }])