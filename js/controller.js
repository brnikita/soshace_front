function AddPlace($scope, $http){
    $scope.submit = function(){
        var postData = {};
        if(this.plTitle){
            postData.title = this.plTitle;
        }
        if(this.plDescription){
            postData.description = this.plDescription;
        }
        $http.post('/save_post', postData);
    }
}
