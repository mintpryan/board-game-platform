
from django.contrib import admin
from django import forms
from .models import Event,EventRegistration
from django.contrib.admin.widgets import AdminDateWidget
from django.utils import timezone
from zoneinfo import ZoneInfo
import pytz
import datetime


class CustomSplitDateTimeWidget(forms.SplitDateTimeWidget):
    def __init__(self):
        date_attrs = {'type': 'date'}
        time_attrs = {'type': 'time', 'step': 60}
        widgets = [forms.DateInput(attrs=date_attrs),
                   forms.TimeInput(attrs=time_attrs)]
        super().__init__(widgets, date_attrs={
            'type': 'date'}, time_attrs={'type': 'time'})


class EventAdminForm(forms.ModelForm):
    recurring_days = forms.MultipleChoiceField(
        choices=Event.DAYS_OF_WEEK,
        widget=forms.CheckboxSelectMultiple,
        required=False
    )

    class Meta:
        model = Event
        fields = '__all__'
        widgets = {
            'start': CustomSplitDateTimeWidget(),
            'end': CustomSplitDateTimeWidget(),
            'recurrence_end_date': AdminDateWidget(),
        }

    def clean_start(self):
        start = self.cleaned_data['start']
        formatted_start = start.strftime("%Y-%m-%d %H:%M:%S")
        local_time = datetime.datetime.strptime(formatted_start, '%Y-%m-%d %H:%M:%S')

        local_tz = pytz.timezone('Asia/Almaty')
        local_time = local_tz.localize(local_time)
        utc_time = local_time.astimezone(pytz.utc)
        return utc_time

    def clean_end(self):
        end = self.cleaned_data['end']
        formatted_start = end.strftime("%Y-%m-%d %H:%M:%S")
        local_time = datetime.datetime.strptime(formatted_start, '%Y-%m-%d %H:%M:%S')

        local_tz = pytz.timezone('Asia/Almaty')
        local_time = local_tz.localize(local_time)
        utc_time = local_time.astimezone(pytz.utc)
        return utc_time

    class Media:
        js = ('js/admin_timezone.js',)



@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    form=EventAdminForm
    list_display=('title', 'start', 'end', 'is_recurring')
    list_filter=('start', 'is_recurring')
    search_fields=('title',)


@admin.register(EventRegistration)
class EventRegistrationAdmin(admin.ModelAdmin):
    list_display=('user', 'event')
