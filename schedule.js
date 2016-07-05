define(['moment'], function(moment) {
    //kendo UI的通知组件
    var notification = $(".notification").kendoNotification({
            position: {
                pinned: true,
                top: 80,
                left: null,
                bottom: null,
                right: 20
            },
            animation: {
                open: {
                    effects: "slideIn:left"
                },
                close: {
                    effects: "slideIn:left",
                    reverse: true
                }
            },
            width: 500,
            autoHideAfter: 3000,
        }
    ).data("kendoNotification");

    function createCalendar($scope) {
        $scope.find(".calendar").kendoCalendar({
            culture: "de-DE",
            format: "yyyy/MM/dd HH:mm:ss"
        });
    }
    function createScheduler($scope) {
        var date = new Date();
        var startTime =( moment().format("YYYY/M/D") + "\t" +"9:00").toString();
        var endTime = (moment().format("YYYY/M/D") + "\t" + "19:00").toString();
        //indexSchedular($scope, date, startTime, endTime);
        testSchedular($scope, date, startTime, endTime);
    }

    function indexSchedular($scope, date, startTime, endTime) {
        $.ajax({
            url: 'schedule/list',
            type: 'get',
            success: function(rs) {
                if(rs.code != 1) {
                    return notification.show('读取预约列表失败', 'error');
                }
                var dataSource = rs.data.schedules;
                $scope.find('.schedular').kendoScheduler({
                    date: date,
                    height: 500,
                    allDaySlot: false,
                   /* add: scheduler_addOrder,
                    save: scheduler_save,
                    remove: scheduler_removeOrder,*/
                    views: [
                        {
                            type: "day",
                            startTime:  new Date(startTime),
                            endTime: new Date(endTime)
                        },
                        'week', 'month'],
                    dataSource: dataSource,
                    editable: {
                        template: $("#editor").html(),
                        confirmation: "你确定要删除这条预约登记吗？",
                        window: {
                            width: 800,
                            //height:600,
                            title: "预约登记", /*,
                             animation: false,*/
                            open: function () {
                                getOrderList();
                                getDoctorList();
                                getOrderSource();
                                $("#sex").kendoDropDownList();
                            }
                        }
                    },
                    navigate: function(e) {
                        console.log("navigate", e.date)
                    }
                });
            }
        })
    }

    function testSchedular($scope, date, startTime, endTime) {
        $scope.find('.schedular').kendoScheduler({
            date: date,
            height: 500,
            allDaySlot: false,
            views: [
                {
                    type: "day",
                    startTime:  new Date(startTime),
                    endTime: new Date(endTime),
                    editable: {
                        create: false
                    }
                },
                'week',
                'month'
            ],
            dataSource: {
                transport: {
                    read: {
                        type: 'GET',
                        url: 'schedule/list',
                        contentType: '',
                        dataType: 'json'
                    },
                    update: {
                        type: 'POST',
                        url: 'schedule/update',
                        dataType: 'json'
                    },
                    create: {
                        type: 'POST',
                        url: 'schedule/add',
                        dataType: 'json'
                    },
                    destroy: {
                        type: 'POST',
                        url: 'schedule/delete',
                        dataType: 'json'
                    },
                    parameterMap: function(options, operation) {
                        if (operation !== "read" && options.models) {
                            return {models: kendo.stringify(options.models)};
                        }
                    }
                },
                schema: {
                    model: {
                        id: "scheduleId",
                        fields: {
                            scheduleId: { from: "scheduleId" },
                            title: { from: "title", defaultValue: "No title", validation: { required: true } },
                            start: { type: "date", from: "start" },
                            end: { type: "date", from: "end" },
                            description: { from: "scheduleItemNames" },
                            name: {from: "patientName"},
                            itemIdColl: {from: "scheduleItemIds"},
                            timeStart: {from: "scheduleTimeStart"},
                            timeEnd: {from: "scheduleTimeEnd"},
                            phone1: {from: "phone1"}
                        }
                    },
                    data: function(rs) {
                        if(rs.code != 1) {
                            return
                        }
                        if(rs.data.schedules) {
                            return rs.data.schedules;
                        }
                        return rs;
                    }
                }
            },
            editable: {
                template: $("#editor").html(),

                confirmation: "你确定要删除这条预约登记吗？",
                window: {
                    width: 800,
                    //height:600,
                    title: "预约登记",
                     animation: false,
                    open: function () {
                        getOrderList();
                        getDoctorList();
                        getOrderSource();
                        $("#sex").kendoDropDownList();
                    }
                }
            },
            navigate: function(e) {
                console.log("navigate", e.date)
            }
        });
    }


    function scheduler_addOrder(e) {
       console.log("add");
    }

    function scheduler_save(e) {
        var $target = $('.k-window');
        var name = $target.find('input[name=title]').val();
        var phone1 = $target.find('input[name=phone1]').val();
        var phone2 = $target.find('input[name=phone2]').val();
        var old = $target.find('input[name=old]').val();
        var timeStart = $target.find('input[name=start]').val();
        var timeEnd = $target.find('input[name=end]').val();
        var sex = $target.find('select[id=sex] option[selected=selected]').text();
        var doctorId = $target.find('select[id=doctorList] option[selected=selected]').val();
        var scheSource = $target.find('select[id=customerSource] option[selected=selected]').val();
        var item = $target.find('[type="checkbox"]:checked').next();
        var itemIdArr = [];
        $target.find('[type="checkbox"]:checked').next().each(function(index,element){
            var itemid = $(this).attr('for');
            itemIdArr.push(itemid);
        });
        var itemIdColl = itemIdArr.toString();

        $.ajax({
            'url': 'schedule/add',
            type: 'post',
            data: {
                name: name,
                phone1: phone1,
                phone2: phone2,
                old: old,
                doctorId: doctorId,
                timeStart: timeStart,
                timeEnd: timeEnd,
                itemIdColl: itemIdColl,
                scheSource: scheSource
            },
            success: function(rs) {
                if(rs.code == 1) {
                    notification.show("添加预约成功", "success");
                    return;
                }
                return notification.show(rs.msg, "error");
            },
            error: function(err) {
                notification.show('添加失败，系统错误', "error");
            }
        })
    }


    function scheduler_removeOrder(e) {
        console.log("remove");
    }

    function navigateDate($scope) {
        $scope.on('click', '.calendar .k-state-hover', function() {
            var calendar = $(".calendar").data("kendoCalendar");
            var current = calendar.current();
            var value = current.toLocaleDateString();
            var $schedular = $scope.find('.schedular');
            var schedular = $schedular.data('kendoScheduler');
            schedular.date(new Date(value));
        });
    }


    function selectDoctor($scope) {
        var $target = $scope.find('.k-view-day');
        var views = [{
            type: "day",
            allDaySlotTemplate: kendo.template($("#allDaySlotTemplate").html())
        }];
        var group = {
            resources: ["Rooms"]
        };
        var resources =  [
            {
                field: "roomId",
                name: "Rooms",
                dataSource: [
                    { text: "Meeting Room 101", value: 1, color: "#6eb3fa" },
                    { text: "Meeting Room 201", value: 2, color: "#f58a8a" }
                ],
                title: "Room"
            }
        ];
        if($target.hasClass('k-state-selected')) {
            var scheduler = $scope.find('.schedular').data('kendoScheduler');
            /*scheduler.addEvent({
                views: views,
                group: group,
                resources: resources
            });*/
        }
    }

    function getOrderList() {
        $.ajax({
            url: 'scheduleitem/list',
            type: 'get',
            success: function(rs) {
                if(rs.code == 1) {
                    data = rs.data.items;
                }
                var template =  kendo.template($('#orderItem').html());
                var result_template = template(data);
                $('.o_item').html(result_template);
            }
        });
    }

    function getDoctorList() {
        $.ajax({
            url: 'user/listscheduledoctor',
            type: 'get',
            success: function(rs) {
                if(rs.code == 1) {
                    data = rs.data.doctors;
                }
                var template =  kendo.template($('#doctorItemList').html());
                var result_template = template(data);
                $('#doctorList').html(result_template);
                $("#doctorList").kendoDropDownList();
            }
        })
    }

    function getOrderSource() {
        $.ajax({
            url: 'schedulesource/list',
            type: 'get',
            success: function(rs) {
                if(rs.code == 1) {
                    data = rs.data.sources;
                }
                var template = kendo.template($('#patientSource').html());
                var ps_template = template(data);
                $('#customerSource').html(ps_template);
                $("#customerSource").kendoDropDownList();
            }
        })
    }


    function _bindEvents($scope) {
        createCalendar($scope);
        createScheduler($scope);
        navigateDate($scope);
        selectDoctor($scope);
    }

    return {
        init: function(e) {
            var $scope = $('.order');
            _bindEvents($scope);
        }
    }
});