/**
 * Created by Lenovo on 2017/7/15.
 */
var myApp = angular.module('myApp', []);

myApp.service('noteService',function () {
    this.getAllNotes=function () {
        if(localStorage.notes){
            return JSON.parse(localStorage.notes);
        }
        else {
            return [];
        }
    }
    this.saveNoteToLocal=function (notes) {
        localStorage.notes=JSON.stringify(notes);
    }
});
myApp.controller('myCtrl', function ($scope,noteService) {
    $scope.notes=noteService.getAllNotes();
    $scope.add=function (e) {
        var len=$scope.notes.length;
        var colorArr=['default','primary','success','info','warning','danger'];
        if(len){
            var id=$scope.notes[len-1].id+1;
        }else{
            var id=1;
        }

        var color=colorArr[Math.floor(Math.random()*colorArr.length)];
        $scope.notes.push({
            id:id,
            color:color,
            title:'新建标签',
            content:'',
            position:{
                left:e.clientX-30,
                top:e.clientY-50
            }
        });
    }

    $scope.remove=function (id) {
        var i=0;
        $scope.notes.forEach(function (v,index) {
            if(v.id==id){
                i=index;
            }
        })
        $scope.notes.splice(i,1);
    }

    $scope.$watch('notes',function (newv,oldv) {
        noteService.saveNoteToLocal($scope.notes);
    },true);
});

myApp.directive('noteHeader', function () {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'tpl/header.html'
    }
});

myApp.directive('note', function () {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'tpl/note.html',
        scope:{
            data:"=",
            myFn:'&'
        },
        link: function (scope, element, attr) {
            var lefts=scope.data.position.left;
            var tops=scope.data.position.top;
            var ele = $(element);
            ele.on("mousedown",'.remove',function (e) {
                e.stopPropagation();
            });
            ele.on("mousedown",'.panel-body',function (e) {
                e.stopPropagation();
            });
            ele.on("mousedown",'.panel-heading',function (e) {
                e.stopPropagation();
                e.preventDefault();
                var left=scope.data.position.left;
                var top=scope.data.position.top;
                var startX = e.clientX-left, startY = e.clientY-top;
                $('.panel').removeClass('active');
                ele.addClass('active');
                $(document).on("mousemove", function (e) {
                    lefts=e.clientX-startX;
                    tops=e.clientY-startY;
                    ele.css({left: lefts, top: tops});
                });
                $(document).on("mouseup", function () {
                    $(document).off("mouseup");
                    $(document).off("mousemove");
                });
            });
            ele.on('mouseup',function () {
                scope.$apply(function () {
                    scope.data.position.left=lefts;
                    scope.data.position.top=tops;
                });
            });
        }
    }
});