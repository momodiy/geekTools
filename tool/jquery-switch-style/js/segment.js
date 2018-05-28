(function ($) {
    $.fn.extend({
        Segment: function () {
            $(this).each(function () {
                var self = $(this);
                var wrapper = $("<div>", {class: "ui-segment"});
                $(this).find("option").each(function () {
                    let option = $("<span>", {
                        class: 'option',
                        text: $(this).text(),
                        title: $(this).attr('title'),
                        value: $(this).val()
                    });
                    if ($(this).is(":selected")) {
                        option.addClass("active");
                    }
                    wrapper.append(option);
                });
                wrapper.find("span.option").click(function () {
                    +$(this).attr('value') ? optionsOne() : optionsTwo();
                    wrapper.find("span.option").removeClass("active");
                    $(this).addClass("active");
                    self.val($(this).attr('value'));
                });
                $(this).after(wrapper);
                $(this).hide();
            });
        }
    });
})(jQuery);

$(".segment-select").Segment();


const optionsOne = () => {
    //切换到选项一执行的函数
};

const optionsTwo = () => {
    //切换到选项二执行的函数
};
